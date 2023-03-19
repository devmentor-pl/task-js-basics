import './style.css';
import 'virtual:windi.css';
import './styles/main.scss';
import { setupCalculator } from './calculator';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main class="calculator" id="calculator">
      <header class="calculator__display display">
          <ul class="display__menu">
            <li class="display__item"><button class="display__button display__button--close">x</button></li>
            <li class="display__item"><button class="display__button display__button--minimalize">-</button></li>
            <li class="display__item"><button class="display__button display__button--zoom">+</button></li>
          </ul>
          <h3 class="calculator__display-current-value display__current-value" id="current-value">0</h3>
      </header>
			<section class="calculator__buttons-section buttons-section">
				<ul class="buttons-section__buttons-list buttons-list" id="buttons-list">
					<li class="buttons-list__item item"><button class="item__button item__button--sign" data-action="clear">C</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--sign" data-action="multiply">&times;</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--sign" data-action="modulo">%</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--sign" data-action="add">+</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">7</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">8</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">9</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--sign item__button--sign-remove" data-action="remove">&#9003;</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">4</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">5</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">6</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--sign" data-action="subtract">-</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">1</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">2</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--number">3</button></li>
					<li class="buttons-list__item item item--sign-enter"><button class="item__button item__button--sign" data-action="calculate">=</button></li>
					<li class="buttons-list__item item item--number-zero"><button class="item__button item__button--number">0</button></li>
					<li class="buttons-list__item item"><button class="item__button item__button--sign" data-action="comma">,</button></li>
					
				</ul>
			</section>
		</main>
`;

setupCalculator(document.querySelector<HTMLElement>('#calculator')!);
