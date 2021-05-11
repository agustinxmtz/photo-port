import React from 'react';

function Nav() {

    function categorySelected() {
        console.log('hello')
    }
    const categories = [
        {
            name : 'commercial',
            description:
                'Photos of grocery stores, food trucks, and other commercial projects', 
        },
        {   name : 'Portraits', description: 'portraits of people in my life' },
        {   name: 'Food', description: 'Delicious delicacies' },
        {
            name: 'Landscape',
            description: 'Fields, farmhouse, waterfalls, and the beauty of nature',
        },
    ];

    return (
        <header>
            <h2>
                <a href = "/">
                    <span role = "img" arial-lable = "camera" > 📸 </span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className = "flex-row" >
                    <li className = "mx-2" >
                        <a href = "#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span> Contact </span>
                    </li>
                        { categories.map((category) => (
                            <li
                                className = 'mx-1'
                                key = {category.name}
                            >
                                <span onClick = {() => categorySelected(category.name)} >
                                    {category.name}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>

        </header>
    );
}

export default Nav;