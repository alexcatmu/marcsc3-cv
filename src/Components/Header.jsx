import React, {Component} from 'react';
import {Link} from 'react-scroll'
import {Waypoint} from "react-waypoint";
import {connect} from "react-redux";

class Header extends Component {


    render() {
        const visible = this.props.visible ? "fadeIn" : "fadeOut";
        const opaque = this.props.opaque ? "opaque" : "";
        if (this.props.data) {
            return (
                <header id="home" style={{minHeight: window.innerHeight}}>
                    <Waypoint
                        topOffset="250px"
                        onEnter={() => this.props.setVisible()}
                        onLeave={() => this.props.setInvisible()}
                    />
                    <nav id="nav-wrap" className={[visible, opaque].join(" ")}>

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#nav" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeClass="active"
                                      to="home"
                                      spy={true} smooth={true} duration={1000}>Home</Link></li>
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeClass="active"
                                      to="about"
                                      spy={true} smooth={true} duration={750}>About</Link></li>
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeClass="active"
                                      to="resume"
                                      spy={true} smooth={true} duration={750}>Resume</Link></li>

                            {this.props.data && this.props.data.visible.contact &&
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}}
                                      activeClass="active"
                                      to="contact"
                                      spy={true} smooth={true} duration={750}>Contact</Link></li>}
                        </ul>

                    </nav>

                    <div className="row banner">

                        <div className="banner-text">
                            <h1 className="responsive-headline">{this.props.data.fullname}</h1>
                            <h3>
                                <span>{this.props.data.occupation}</span>
                            </h3>
                            <hr/>
                            <ul className="social">
                                {this.props.data.social.map(network => {
                                    return <li key={network.name}><a target="_blank" rel="noopener noreferrer"
                                                                     href={network.url}><i
                                        className={network.className}/></a></li>
                                })}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <Link style={{cursor: "pointer"}} to="about" spy={true}
                              smooth={true} duration={1000}><i className="icon-down-circle"/></Link>
                    </p>

                </header>
            );
        } else return (<div/>);
    }
}


function mapStateToProps(state) {
    return {
        visible: state.visible,
        opaque: state.opaque,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setInvisible: () => dispatch({type: "SET_INVISIBLE"}),
        setVisible: () => dispatch({type: "SET_VISIBLE"})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
