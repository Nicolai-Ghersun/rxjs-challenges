import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ROUTES, provideRouter } from '@angular/router';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
}).catch(err => console.error(err));