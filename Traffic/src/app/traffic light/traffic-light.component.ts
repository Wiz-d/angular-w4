import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'app-traffic-light',
    templateUrl: './traffic-light.component.html',
    styleUrl: './traffic-light.component.css',
    standalone: true
})

export class TrafficLightComponent {


    @Input() public trafLightObj;

    public red = false;
    public yellow = false;
    public green = false;
    public timer = 5;
    public interval;
    public isReversed = false;

    ngOnInit(){
        this.updateSelectedColor();
        if(this.red) this.RedCycle();
        if(this.green) this.GreenCycle();
    }

    public updateSelectedColor(){
        if(this.trafLightObj.color == 'red') {
            this.red = true;
            this.yellow = false;
            this.green = false;
        }
        if(this.trafLightObj.color == 'yellow') {
            this.red = false;
            this.yellow = true;
            this.green = false;
        }
        if(this.trafLightObj.color == 'green'){
            this.red = false;
            this.yellow = false;
            this.green = true;
        }

    }

    public RedCycle(){
    this.interval = setInterval(() => {
        if(this.timer>0){
            this.timer--;
        } else {
            this.red = false;
            this.yellow = true;
            this.timer = 5;
            this.isReversed = false;
            clearInterval(this.interval);
            this.YellowCycle();
        }
    },1000)
    }
        
    public YellowCycle(){
    this.interval = setInterval(() => {
        if(this.timer>0){
            this.timer--;
        } else {
            this.timer = 2;
            clearInterval(this.interval);
            if (!this.isReversed){
                this.yellow=false;
                this.green = true;
                this.GreenCycle();
            } else {
                this.yellow=false;
                this.red = true;
                this.RedCycle();
            }
        }
    },1000)
    }

    public GreenCycle(){
        this.interval = setInterval(() => {
            if(this.timer>0){
                this.timer--;
            } else {
                this.isReversed = true;
                this.green = false;
                this.yellow = true;
                this.timer = 5;
                clearInterval(this.interval);
                this.YellowCycle();
            }
        },1000)
    }

}


