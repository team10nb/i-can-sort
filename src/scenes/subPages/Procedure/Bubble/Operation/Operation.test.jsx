import {operate} from './Operation';
//
const text = <div>
                <h1>Operation</h1>
                <h2><font color = "white"> Goodbye world </font></h2>
                <p>wow, goodbye bird!</p>
                <li>wow, goodbye tree</li>
            </div>;

test('should pass right text', () => {

    expect(operate).toStrictEqual(text);

})