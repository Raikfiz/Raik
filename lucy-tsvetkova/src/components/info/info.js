import './info.css'
import MainList from '/workspaces/Raik/lucy-tsvetkova/src/components/main/main.js'
import '/workspaces/Raik/lucy-tsvetkova/src/content/images/headimg.png';
import { dataForList } from '/workspaces/Raik/lucy-tsvetkova/src/content/mainData.js';

export default () =>{
    <section>
        <img src={headimg.png} />
        <dl>
            {dataForList.map((item) => <MainList{...item} />)}
        </dl>
            
    </section>
}
