import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public trafficLightCollection:any = [];

  public ngOnInit() {

    this.trafficLightCollection.push({
      id    : 1,
      color: 'red'
    },
    {
      id    : 2,
      color: 'green'
    },
    {
      id    : 3,
      color: 'red'
    },
    {
      id    : 4,
      color: 'green'
    }
  );

  }
  


}
