import React from "react";
import Avatar from "@material-ui/core/Avatar";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div className="App">
                {
                    items.map((item) => (
                        
                        <div key={item.id} className="row" style={{backgroundColor: ((item.id)%2 === 1) ? "#FAFAFA" : "white"}}>
                            <div className="name"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input><Avatar style={{ width: 25, height: 25 }} src="https://mui.com/static/images/avatar/1.jpg" className="avatar"/>{item.name}</div>
                            <div className="number">{item.phone}</div>
                            <div className="email">{item.email}</div>
                            <div className='location'>{item.address.geo.lat}</div>
                            <div className='location'>{item.address.geo.lng}</div>
                            <div className='action'>
                                <div>🖉 Edit</div>
                                <div>🗑 Delete</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default App;
