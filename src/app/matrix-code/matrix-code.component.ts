import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-matrix-code',
  standalone: true,
  templateUrl: './matrix-code.component.html',
  styleUrls: ['./matrix-code.component.css']
})
export class MatrixCodeComponent implements OnInit, OnDestroy {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private matrix: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("");
  private fontSize: number = 10;
  private columns!: number;
  private drops: number[] = [];
  private animationTimeoutId!: any;
  private delay: number = 150; // delay in milliseconds

  ngOnInit(): void {
    this.canvas = document.getElementById('matrix') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = this.canvas.width / this.fontSize;

    for (let x = 0; x < this.columns; x++) {
      this.drops[x] = 1;
    }
    this.startAnimation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = this.canvas.width / this.fontSize;
    this.drops = [];
    for (let x = 0; x < this.columns; x++) {
      this.drops[x] = 1;
    }
  }

  startAnimation(): void {
    this.draw();
  }

  draw(): void {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "#F1135C"; // red-purple text
    // this.ctx.fillStyle = "#2AF3B0"; // green text
    this.ctx.font = this.fontSize + "px arial";

    for (let i = 0; i < this.drops.length; i++) {
      const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
      if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }

    this.animationTimeoutId = setTimeout(this.draw.bind(this), this.delay);
  }

  ngOnDestroy(): void {
    clearTimeout(this.animationTimeoutId);
  }
}
