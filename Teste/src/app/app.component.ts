import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;
  nome = 'John Clecio Fideles Lima';
  text: string = '';
  pessoas = [
    {
      nome: 'John',
      sobrenome: 'Lima'
    },
    {
      nome: 'Clecio',
      sobrenome: 'Fideles'
    },
    {
      nome: 'Pedro',
      sobrenome: 'Lima'
    },
    {
      nome: 'Henrique',
      sobrenome: 'Fideles'
    }
  ]

  constructor(){

  }

  ngOnInit() {
    console.log(this.pessoas);
    let interval =  setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }
  clicou(nome: string): void {
     console.log('Clicou em min', nome)
  }
}
