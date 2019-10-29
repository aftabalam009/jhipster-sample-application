import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterAuthApplSharedModule } from 'app/shared/shared.module';
import { JhipsterAuthApplCoreModule } from 'app/core/core.module';
import { JhipsterAuthApplAppRoutingModule } from './app-routing.module';
import { JhipsterAuthApplHomeModule } from './home/home.module';
import { JhipsterAuthApplEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterAuthApplSharedModule,
    JhipsterAuthApplCoreModule,
    JhipsterAuthApplHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterAuthApplEntityModule,
    JhipsterAuthApplAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipsterAuthApplAppModule {}
