import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FakeDbService } from '@fake-db/fake-db.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ContextMenuModule } from '@ctrl/ngx-rightclick';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { ToastrModule } from 'ngx-toastr';

import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreModule } from '@core/core.module';

import { coreConfig } from 'app/app-config';
import { AppComponent } from 'app/app.component';
import { ErrorInterceptor, JwtInterceptor, fakeBackendProvider } from 'app/auth/helpers'; // used to create fake backend
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { LayoutModule } from 'app/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    AppRoutingModule,
  
    NgbModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    ContextMenuModule,
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,
    CardSnippetModule,
    LayoutModule,
    ContentHeaderModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // ! IMPORTANT: Provider used to create fake backend, comment while using real API
    fakeBackendProvider
  ],
  // entryComponents: [BasicCustomContextMenuComponent, AnimatedCustomContextMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
