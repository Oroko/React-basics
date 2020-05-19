const title = React.createElement(
    'h1',
    {id:'main_title', title:'This is a title'},
    'My First Ever React Element!'
);

ReactDOM.render(
    title,
    document.getElementById('root')
);