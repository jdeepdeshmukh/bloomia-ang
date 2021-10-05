import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/home/services/configuration.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  longSqueezeValue= 0;
  longRestValue = 0
  longRepsValue = 1
  shortSqueezeValue = 0
  shortRestValue = 0
  shortRepsValue = 0
  rkSqueezeValue = 0
  rkRestValue = 0
  rkRepsValue = 0
  playAni = true;
  addClass = true;
  type = "long"
  exercise = [ { squeeze : 3, rest : 0, reps : 3 }, { squeeze : 5 , rest : 0, reps : 2 } ]

  constructor(private _configServ : ConfigurationService) {
    this._configServ.longSqueezeValue.subscribe(value=>{
      this.longSqueezeValue = value
    })
    this._configServ.longRestValue.subscribe(value=>{
      this.longRestValue = value
    })
    this._configServ.longRepsValue.subscribe(value=>{
      this.longRepsValue = value
    })
    this._configServ.shortSqueezeValue.subscribe(value=>{
      this.shortSqueezeValue = value
    })
    
    this._configServ.shortRestValue.subscribe(value=>{
      this.shortRestValue = value
    })
    this._configServ.shortRepsValue.subscribe(value=>{
      this.shortRepsValue = value
    })
    this._configServ.rkSqueezeValue.subscribe(value=>{
      this.rkSqueezeValue = value
    })
    this._configServ.rkRestValue.subscribe(value=>{
      this.rkRestValue = value
    })
    this._configServ.rkRepsValue.subscribe(value=>{
      this.rkRepsValue = value
    })
   }

   play(){
    //  if(check=="long"){
    //    console.log("long");
    //    var border = document.getElementsByTagName("circle");
    //     var timer = document.getElementsByClassName("timer");
    //     border[0].style.animationDuration = this.longSqueezeValue+'s';
    //     border[0].style.animationIterationCount = String(this.longRepsValue);
    //     if(this.playAni){
    //       border[0].style.animationPlayState = "running"; 
    //       this.playAni = !this.playAni; 
    //      }
    //      else{
    //       border[0].style.animationPlayState = "paused";
    //       this.playAni = !this.playAni;
    //      }
    //    this.play("short")
    //  }


    //  if(check=="short"){
    //    console.log("short");
    //    var border = document.getElementsByTagName("circle");
    //     var timer = document.getElementsByClassName("timer");
    //     border[0].style.animationDuration = this.shortSqueezeValue+'s';
    //     border[0].style.animationIterationCount = String(this.shortRepsValue);
    //     if(this.playAni){
    //       border[0].style.animationPlayState = "running"; 
    //       this.playAni = !this.playAni; 
    //      }
    //      else{
    //       border[0].style.animationPlayState = "paused";
    //       this.playAni = !this.playAni;
    //      }
    //    this.play("kegel")
    //  }
    //  if(check=="kegel"){
    //    console.log("kegel");
    //    this.play("no")
    //  }
     
      // for(var i=0; i<this.exercise.length; i++){
      //   var border = document.getElementsByTagName("circle");
      //   var timer = document.getElementsByClassName("timer");
      //   border[0].style.animationDuration = this.exercise[i].squeeze+'s';
      //   border[0].style.animationIterationCount = String(this.exercise[i].reps);
      //   border[0].style.transitionDelay = this.longRestValue+'s';
      // }


      var border = document.getElementsByTagName("circle");
      var timer = document.getElementsByClassName("timer");
      border[0].style.animationDuration = this.longSqueezeValue+'s';
      border[0].style.animationIterationCount = String(this.longRepsValue);
      border[0].style.transitionDelay = this.longRestValue+'s';

     let countdown = this.longRepsValue;
     let wait = this.longSqueezeValue;
    //  this.addClass = false;
     let addClass : boolean;
     this.addClass = addClass;
     let shortSqueeze = this.longRestValue;
     
     const radius = Number(border[0].getAttribute('r'));
     const circumference = -2 * radius * Math.PI;
 
     border[0].style.transition = `all ${countdown}s linear`
 
     timer[0].innerHTML = String(wait);
 
     function startTimer() {
       const interval = setInterval(() => {
         
         
         if (countdown === 0) {
           clearInterval(interval);
         }
         else{
          countdown = countdown - 1;
          // addClass = true;
        //  timer[0].innerHTML = String(countdown);
      border[0].style.animationDuration = shortSqueeze+'s';
      const radius = Number(border[0].getAttribute('r'));
     const circumference = -2 * radius * Math.PI;
 
     border[0].style.transition = `all ${shortSqueeze}s linear`
     border[0].setAttribute('stroke-dasharray', String(circumference));
     border[0].setAttribute('stroke-dashoffset', String(circumference));
        console.log("hello");
        
      // addClass = false;
         }
       }, wait*1000);
 
       border[0].setAttribute('stroke-dasharray', String(circumference));
       border[0].setAttribute('stroke-dashoffset', String(circumference));
       
      }
      
     setTimeout(() => startTimer())

     setInterval(function(){
      console.log(wait,'1');
      this.addClass = false
    }, wait*1000);
    
    setTimeout(function(){
      setInterval(function(){
        console.log(shortSqueeze,'2');
        this.addClass = true
      }, shortSqueeze*1000);
    }, wait*1000);


      if(this.playAni){
       border[0].style.animationPlayState = "running"; 
       this.playAni = !this.playAni; 
      }
      else{
       border[0].style.animationPlayState = "paused";
       this.playAni = !this.playAni;
      }

    // function play2(){
    //   var border = document.getElementsByTagName("circle");
    //  var timer = document.getElementsByClassName("timer");
    //  border[0].style.animationDuration = this.shortSqueezeValue+'s';
    //  border[0].style.animationIterationCount = String(this.shortRepsValue);
    //  border[0].style.transitionDelay = this.shortRestValue+'s';
    // }
  
  }


firstFunction(){

    var border = document.getElementsByTagName("circle");
    var timer = document.getElementsByClassName("timer");
    this.addClass = false;
    border[0].style.animationDuration = this.shortSqueezeValue+'s';
    border[0].style.animationIterationCount = String(this.shortRepsValue);
    

};

secondFunction(){
    var border = document.getElementsByTagName("circle");
    var timer = document.getElementsByClassName("timer");
    border[0].style.animationDuration = this.longSqueezeValue+'s';
    border[0].style.animationIterationCount = String(this.longRepsValue);

    function startTimer() {
      
        const interval = setInterval(() => {
          
          
          if (this.longRepsValue === 0) {
            clearInterval(interval);
          }
          else{
            this.longRepsValue = this.longRepsValue - 1;
          }
        }, this.longSqueezeValue * 1000);
  
      }
      // setTimeout(() => startTimer(), (this.longSqueezeValue+this.longRestValue)*1000)

    setTimeout(()=>{this.firstFunction()},((this.longSqueezeValue+this.longRestValue)*this.longRepsValue)*1000);
};



  ngOnInit(): void {
  }

}
