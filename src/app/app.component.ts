import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    {
      id: 1,
      icon: 'tech-1',
      car: {
        name: 'Грузовик',
        number: 'Р100ТТ 799',
        milage: '2000 км',
        numberModel: 'Scania TT280',
        year: 'Год выпуска: 2018'
      },
      button: ['def-car', 'delete', 'edit', 'file', 'info', 'sample-1'],
      knot: 2,
      sample: 3,
      detailed: 'Подробнее о технике',
      description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Alias animi ' +
        'atque consequatur corporis cumque, deleniti et eum' +
        ' excepturi fugit harum labore maiores nemo officiis perferendis' +
        ' quam quis reiciendis saepe sit, totam, voluptatum. Eligendi harum, iste pariatur quaerat saepe sit sunt.'
    },
    {
      id: 3,
      icon: 'unit-4',
      car: {
        number: 'Двигатель',
        model: 'Scania',
        numberModel: '№123432',
        year: 'Объем системы смазки: 200л'
      },
      button: ['edit'],
      detailed: 'Подробнее об узле',
    },
    {
      id: 3,
      icon: 'tech-2',
      car: {
        name: 'Грузовик',
        number: 'Р150ТТ 799',
        milage: '3000 км',
        numberModel: 'Kamaz TT280',
        year: 'Год выпуска: 2014'
      },
      button: ['def-car', 'sample-1'],
      knot: 1,
      detailed: 'Подробнее о технике',
      description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Alias animi ' +
        'atque consequatur corporis cumque, deleniti et eum' +
        ' excepturi fugit harum labore maiores nemo officiis perferendis' +
        ' quam quis reiciendis saepe sit, totam, voluptatum. Eligendi harum, iste pariatur quaerat saepe sit s ' +
        'atque consequatur corporis cumque, deleniti et eum' +
        ' excepturi fugit harum labore maiores nemo officiis perferendis' +
        ' quam quis reiciendis saepe sit, totam, voluptatum. Eligendi harum, iste pariatur quaerat saepe sit sunt.'
    },
    {
      id: 4,
      icon: 'unit-3',
      car: {
        number: 'АКПП',
        model: 'Kamaz',
        numberModel: '№111111',
        year: 'Объем системы смазки: 200л'
      },
      button: ['edit', 'file'],
      knot: 2,
      sample: 3,
    },
    {
      id: 5,
      icon: 'tech-3',
      car: {
        name: 'Грузовик',
        number: 'Р150ТТ 799',
        milage: '4000 км',
        numberModel: 'Scania TR280',
        year: 'Год выпуска: 2020'
      },
      button: ['info'],
      sample: 3,
      detailed: 'Подробнее о технике',
      description: 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipisicing elit. Alias animi ' +
        'atque consequatur corporis cumque, deleniti et eum' +
        ' excepturi fugit harum labore maiores nemo officiis perferendis' +
        ' quam quis reiciendis saepe sit, totam, voluptatum. Eligendi harum, iste pariatur quaerat saepe sit sunt.'
    },
    {
      id: 6,
      icon: 'tech-5',
      car: {
        name: 'Грузовик',
        numberModel: 'Scania TR280',
      },
      button: ['info'],
      sample: 3,
      detailed: 'Подробнее об узле',
    }
  ]

}
