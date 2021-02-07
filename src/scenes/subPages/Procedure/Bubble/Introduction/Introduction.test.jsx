
import {intro} from './Introduction';
//
const text = <div>
                <h1>Introduction</h1>
                <h2><font color = "white"> hello world </font></h2>
                <p>wow, hello bird!</p>
                <li>wow, hello tree</li>
            </div>;

test('should pass right text', () => {

    expect(intro).toStrictEqual(text);

})