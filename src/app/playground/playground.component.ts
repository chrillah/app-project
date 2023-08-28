import {Component } from '@angular/core';

@Component({
    selector: 'app-playground',
    template: `
    <div>
        <h1 [ngStyle]="{backgroundColor: title === 'Fuck' ? 'black' : 'blue' }">{{ title }}</h1>
    </div>
    `,
    styles: [
        `
        h1 {
            text-align: center;
        }

        @media(min-width: 600px){
            h1{
                color: red;
            }
        }
        `
    ]
})

export class Playground{

    title:string = "Fuck";


}
