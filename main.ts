/*/Several ways to bootstrap the application
1. On a server
2. In a browser
3. Pre-compile

In a browser...
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);