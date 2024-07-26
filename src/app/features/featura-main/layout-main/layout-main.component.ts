import { Component } from '@angular/core';
import { RoutingService } from '../../../core/services/routerService/routing.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-main',
  standalone:  true,
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.css',
  imports : [FooterComponent, SidebarComponent, HeaderComponent, CommonModule, RouterOutlet]
})
export class LayoutMainComponent {
  public subscriptions: Array<any> =  []
  public showOverlay = true;
  public layout = {
    customLayout: false,
    layoutNavigationTop: true
  }
  constructor( public routingService: RoutingService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: RouterEvent | any) => {
      
       this.navigationInterceptor(event)
    })

    this.subscriptions.push(this.routingService.onChange.subscribe((value:any)=>{

      if (value && value[value.length - 1]) {
        /*   this.titleService.setTitle(this.getTitle(value[value.length - 1].data['title']));
          this.header = value[value.length - 1].data['title']; */
          const layout = value[value.length - 1].data['layout'];
          if (layout != undefined) {
            this.layout = layout;
          }
       /*    this.description = value[value.length - 1].data['description']; */
        }
      /*   this.changeDetectorRef.markForCheck(); */

      
    }))

    this.subscriptions.push(this.router.events.subscribe((routeEvent: RouterEvent | any) => {
      if (routeEvent instanceof NavigationStart) {
      /*   this.navigationEnd = false; */
      }
      if (routeEvent instanceof NavigationEnd) {
      /*   this.navigationEnd = true; */
      }
    }));



    
}



  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.showOverlay = true;
     // this.spinner.show();
    }

    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

    if (event instanceof NavigationError) {
      this.showOverlay = false;
      //this.spinner.hide();
    }

  }
}
