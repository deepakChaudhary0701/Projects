import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sixth-route',
  templateUrl: './sixth-route.component.html',
  styleUrls: ['./sixth-route.component.scss']
})
export class SixthRouteComponent implements OnInit {
  public count = 1;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event']) onScroll($event: any) {
    console.log($event)
    this.count++;
    let mainDiv = document.querySelector('.mainDiv');
    let newDiv = document.createElement('div');
    let newBtn = document.createElement('button');
    this.createdNewDiv(newDiv);
    this.createdNewButton(newBtn, this.count);
    newDiv.append(newBtn)
    mainDiv?.append(newDiv);
    console.log(mainDiv)
  }

  public createdNewDiv(newDiv: HTMLElement) {
    newDiv.style.height = '200px';
    newDiv.style.width = '200px';
    newDiv.style.border = '2px solid black';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'center';
    newDiv.style.marginBottom = '20px';
  }

  public createdNewButton(newButton: HTMLElement, countStatus: number) {
    newButton.setAttribute('class', 'btn btn-danger');
    newButton.innerText = 'Show Alert';
    newButton.addEventListener('click', () => {
      this.alert(countStatus);
    });
  }

  public alert(number: number) {
    alert(`Button ${number} is clicked !`);
  }

  public navigateBack() {
    this.router.navigate(["/"]);
  }
}
