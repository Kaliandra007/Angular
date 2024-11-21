// src/main.ts
// Remova ou comente a linha abaixo se o arquivo app.config não for necessário
// import { appConfig } from './app/app.config';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
