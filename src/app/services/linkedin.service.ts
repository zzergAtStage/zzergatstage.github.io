import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkedInService {
  private mockData = {
    headline: {
      localized: {
        en_US: "Java Developer | PL/SQL Developer | Specializing in High-Load Systems & Financial Solutions (PL/SQL, Analysis)",
        de_DE: "Java-Entwickler | PL/SQL-Entwickler | Spezialisierung auf Hochlastsysteme & Finanzlösungen (PL/SQL, Analyse)",
        ru_RU: "Java разработчик | PL SQL разработчик (pl+ опыт)| Специализация на высоконагруженных системах и финансовых решениях"
      },
      preferredLocale: {
        country: "US",
        language: "en"
      }
    },
    localizedHeadline: "Java Developer | PL/SQL Developer | Specializing in High-Load Systems & Financial Solutions (PL/SQL, Analysis)",

    firstName: {
      localized: {
        en_US: "Sergei",
        de_DE: "Sergey",
        ru_RU: "Сергей"
      },
      preferredLocale: {
        country: "US",
        language: "en"
      }
    },
    localizedFirstName: "Sergei",
    lastName: {
      localized: {
        en_US: "Brusentsov",
        de_DE: "Brusentsov",
        ru_RU: "Брусенцов"
      },
      preferredLocale: {
        country: "US",
        language: "en"
      }
    },
    localizedLastName: "Brusentsov",
    about: {
      localized: {
        en_US: `Hi there! I'm a seasoned Java developer with a knack for integrating large-scale bank payment solutions and payment gateways. With over 7 years of experience in PL/SQL development, I've been part of some pretty big projects, including payment solutions and backend accounting systems for loans.
A couple of years ago, I was a system analyst at Yandex, where I specialized in financial solutions and helped launch a new application for swift payments. Before diving into the tech world, I was the chief accounting manager at a bank, leading a team of over 150 people.
When I'm not immersed in code, you'll find me hiking, snowboarding, or enjoying some good electronic music. And of course, my family means the world to me.`,
        de_DE: `Guten Tag! Ich bin ein erfahrener Java-Entwickler mit einer Vorliebe für die Integration von groß angelegten Bankzahlungslösungen und Zahlungsgateways. Mit über sieben Jahren Erfahrung in der PL/SQL-Entwicklung habe ich an einigen bedeutenden Projekten mitgewirkt, darunter Zahlungslösungen und Backend-Buchhaltungssysteme für Kredite.
Vor einigen Jahren war ich als Systemanalytiker bei Yandex tätig, wo ich mich auf Finanzlösungen spezialisiert und die Einführung einer neuen Anwendung für schnelle Zahlungen unterstützt habe. Bevor ich in die Technikwelt eingetaucht bin, war ich leitender Buchhaltungsmanager bei einer Bank und führte ein Team von über 150 Personen.
Wenn ich nicht gerade in Code vertieft bin, findet man mich beim Wandern, Snowboarden oder beim Genießen guter elektronischer Musik. Und natürlich bedeutet meine Familie die Welt für mich.`,
        ru_RU: `Привет! Я опытный Java-разработчик с навыками интеграции крупномасштабных банковских платежных решений и платежных шлюзов. Имея более чем 7-летний опыт разработки PL/SQL, я принимал участие в нескольких довольно крупных проектах, включая платежные решения и внутренние системы учета для кредитов. Пару лет назад я был системным аналитиком в Яндексе, где специализировался на финансовых решениях и помогал запускать новое приложение для быстрых платежей. До того, как окунуться в мир технологий, я был главным бухгалтером в банке, руководя командой из более чем 150 человек. Когда я не погружен в код, вы найдете меня за походом, катанием на сноуборде или наслаждением хорошей электронной музыкой. И, конечно, моя семья значит для меня весь мир.`
      },
      preferredLocale: {
        country: "US",
        language: "en"
      }
    },
    localizedAbout: "Some huge text",
    experience:
      [
        {
        job_item:
        {
          dates: "12.2022 - present days",
          company: {
            localized: {
              en_US: "Informtech oo Ltd",
              de_DE: "Informtech GmBH",
              ru_RU: "Информтех ООО, "
            }, preferredLocale: {
              country: "US",
              language: "en"
            }
          }, localizedCompany: "Informtech oo Ltd",
          title: {
            localized: {
              en_US: "Software Engineer",
              de_DE: "Software Entwickler",
              ru_RU: "Разработчик"
            }, preferredLocale: {
              country: "US",
              language: "en"
            }
          },
          title_desc: {
            localized: {
              en_US: "Engineer at the App Data Experience team, in charge of the analytics pipeline ingesting over 10 million events per hour, processing them and making them available to Analytics and Marketing teams, among others.",
              de_DE: "Ingenieur im App-Daten-Experience-Team, verantwortlich für die Analysepipeline, die stündlich über 10 Millionen Ereignisse aufnimmt, verarbeitet und sie unter anderem den Analyse- und Marketingteams zur Verfügung stellt.",
              ru_RU: "Инженер в команде App Data Experience, отвечающий за аналитический конвейер, обрабатывающий более 10 миллионов событий в час и предоставляющий их аналитическим и маркетинговым командам, среди других."
            }, preferredLocale: {
              country: "US",
              language: "en"
            }
          },
          responsibilities: {
            localized: {
              en_US: "Managing a series of different cloud technologies in AWS: S3, Kinesis (Kafka), Glue (Spark), Lambdas, Athena, and Apache Airflow.",
              de_DE: "Verwaltung einer Reihe verschiedener Cloud-Technologien in AWS: S3, Kinesis (Kafka), Glue (Spark), Lambdas, Athena und Apache Airflow.",
              ru_RU: "Управление серией различных облачных технологий в AWS: S3, Kinesis (Kafka), Glue (Spark), Lambdas, Athena и Apache Airflow."
            }
          },
          achievements: {
            localized: {
              en_US: "Also maintaining and developing a React Native SDK to capture the events from the clients (multi-platform: iOS, Android, Web).",
              de_DE: "Auch Wartung und Entwicklung eines React Native SDKs zur Erfassung der Ereignisse von den Clients (plattformsübergreifend: iOS, Android, Web).",
              ru_RU: "Также поддержка и разработка React Native SDK для захвата событий от клиентов (мультиплатформенность: iOS, Android, Web)."
            }
          }


        },
      },
      {
        job_item:
        {
          dates: "12.2022 - present days",
          company: {
            localized: {
              en_US: "Informtech oo Ltd",
              de_DE: "Informtech GmBH",
              ru_RU: "Информтех ООО, "
            }, preferredLocale: {
              country: "US",
              language: "en"
            }
          }, localizedCompany: "Informtech oo Ltd",
          title: {
            localized: {
              en_US: "Software Engineer",
              de_DE: "Software Entwickler",
              ru_RU: "Разработчик"
            }, preferredLocale: {
              country: "US",
              language: "en"
            }
          },
          title_desc: {
            localized: {
              en_US: "Engineer at the App Data Experience team, in charge of the analytics pipeline ingesting over 10 million events per hour, processing them and making them available to Analytics and Marketing teams, among others.",
              de_DE: "Ingenieur im App-Daten-Experience-Team, verantwortlich für die Analysepipeline, die stündlich über 10 Millionen Ereignisse aufnimmt, verarbeitet und sie unter anderem den Analyse- und Marketingteams zur Verfügung stellt.",
              ru_RU: "Инженер в команде App Data Experience, отвечающий за аналитический конвейер, обрабатывающий более 10 миллионов событий в час и предоставляющий их аналитическим и маркетинговым командам, среди других."
            }, preferredLocale: {
              country: "US",
              language: "en"
            }
          },
          responsibilities: {
            localized: {
              en_US: "Managing a series of different cloud technologies in AWS: S3, Kinesis (Kafka), Glue (Spark), Lambdas, Athena, and Apache Airflow.",
              de_DE: "Verwaltung einer Reihe verschiedener Cloud-Technologien in AWS: S3, Kinesis (Kafka), Glue (Spark), Lambdas, Athena und Apache Airflow.",
              ru_RU: "Управление серией различных облачных технологий в AWS: S3, Kinesis (Kafka), Glue (Spark), Lambdas, Athena и Apache Airflow."
            }
          },
          achievements: {
            localized: {
              en_US: "Also maintaining and developing a React Native SDK to capture the events from the clients (multi-platform: iOS, Android, Web).",
              de_DE: "Auch Wartung und Entwicklung eines React Native SDKs zur Erfassung der Ereignisse von den Clients (plattformsübergreifend: iOS, Android, Web).",
              ru_RU: "Также поддержка и разработка React Native SDK для захвата событий от клиентов (мультиплатформенность: iOS, Android, Web)."
            }
          }


        }
      }
    ]
        ,
        profilePicture: {
        displayImage: "urn:li:digitalmediaAsset:C4D00AAAAbBCDEFGhiJ"
      },
        vanityName: "s.brusentsov",
        id: "secretcode",
  };

  constructor() { }

  getProfileData(): Observable<any> {
    return of(this.mockData);
  }
}
