import "./childTab.css";

export default function ChildTab({childTabs, active}) {
    // console.log("child " + childTabs)
    
    return (
        <div className='childTabs'>
            <ul id="myChildTab">
                
                {
                childTabs.map((childtab) => {
                    if(childtab.c_text === active) {
                        childtab.c_active = true;
                    }
                    else childtab.c_active = false;
                    // console.log("child text " + childtab.c_text)
                    return (
                        <li>
                            <a href={`${childtab.c_url}`}>
                            <button className={`childtab
                                ${ childtab.c_active ? 'childtabActive' : 'childtabUnactive' }
                            `}>
                                {childtab.c_text}
                            </button>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div>
            </div>
        </div>
    );
}
