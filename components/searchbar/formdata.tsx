import React from "react";


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchLists: [
              
                {
                    id: 1,
                    type: "seo",
                    name: "	Do you have any SEO keyword list which you were following? If yes, please share",
                },
                {
                    id: 2,
                    type: "seo",
                    name: "	Do you have GMB listing? If yes please share login details",
                },
                {
                    id: 3,
                    type: "seo",
                    name: "		Do you have Google Analytics account setup? If yes please share the login details",
                },
                {
                    id: 4,
                    type: "seo",
                    name: "	Do you have Google Search console account setup? If yes please share the login details",
                },
                {
                    id: 5,
                    type: "seo",
                    name: "	Do you have last keyword ranking report? If yes please share",
                },
                {
                    id: 6,
                    type: "seo",
                    name: "Do you have any of these accounts- (SEMrush, Aref, ) yes and no",
                },
                {
                    id: 7,
                    type: "logo",
                    name: "		Is there a unique story behind the name and business?",
                },
                {
                    id: 8,
                    type: "logo",
                    name: "	How and why was your business started and where did the idea come from?",
                },
                {
                    id: 9,
                    type: "logo",
                    name: "	What words would you use to describe your brand's personality?",
                },
                {
                    id: 10,
                    type: "social",
                    name: "1.	Pick your social channels –  Facebook, Instagram, Pinterest, LinkedIn, and Twitter (LinkedIn and Twitter for full time clients)",
                },
                {
                    id: 11,
                    type: "social",
                    name: "	Do you have any of the social media accounts? If yes please share the login details",
                },
                {
                    id: 12,
                    type: "social",
                    name: "		Tell us more about your target personal",
                },
                
               
            ],
            checked: false
        };
    }


    handlelogo = () => {
        if (this.state.checked === false) {
            const filteredlogo = this.state.searchLists.filter(
                item => item.type === "logo"
            );
            console.log(filteredlogo);
            this.setState({ searchLists: filteredlogo, checked: true });
        } else {
            setTimeout(() => {
                this.setState({
                    searchLists: this.state.searchLists,
                    checked: false
                });
            }, 10000);
        }
    };

    handlesocial = () => {
        if (this.state.checked === false) {
            const filteredsocail = this.state.searchLists.filter(
                item => item.type === "social"
            );
            console.log(filteredsocail);
            this.setState({ searchLists: filteredsocail, checked: true });
        } else {
            setTimeout(() => {
                this.setState({
                    searchLists: this.state.searchLists,
                    checked: false
                });
            }, 10000);
        }
    };

    handleseo = () => {
        if (this.state.checked === false) {
            const filteredseo = this.state.searchLists.filter(
                item => item.type === "seo"
            );
            console.log(filteredseo);
            this.setState({ searchLists: filteredseo, checked: true });
        } else {
            setTimeout(() => {
                this.setState({
                    searchLists: this.state.searchLists,
                    checked: false
                });
            }, 10000);
        }
    };

    render() {
        console.log("rendered");
        const mapped = this.state.searchLists.map(item => {
            return (
                <div key={item.id}>
                    <li className="block pl-3 uppercase tracking-wide text-white text-xs font-medium mt-2 ">
                        {item.name}
                        {item.type}
                    </li>
                </div>
            );
        });
        return (
            <div className="searchContainer">
                <div className="flex justify-between">
                <p onClick={this.all}  className="block pl-3 uppercase tracking-wide text-white text-xs font-bold ">all</p>
                    <p onClick={this.handleseo}  className="block pl-3 uppercase tracking-wide text-white text-xs font-bold ">SEO</p>
                    <p onClick={this.handlesocial}  className="block pl-3 uppercase tracking-wide text-white text-xs font-bold ">Social media</p>
                    <p onClick={this.handlelogo}  className="block pl-3 uppercase tracking-wide text-white text-xs font-bold ">Logo and Branding</p>
                    {/* <p onClick={this.handleFreelancer}  className="block pl-3 uppercase tracking-wide text-white text-xs font-bold ">SEO</p> */}
                </div>
                <ul  className="mt-3">{mapped}</ul>
            </div>
        );
    }
}

export default Search;
