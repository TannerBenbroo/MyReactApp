import React from "react";

import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const SocialLink = (props) => {
    console.log(props.url); // This will print the url prop to the console

    return (
        <a target="_blank" rel="noopener noreferrer" href={props.url}>
            {props.children}
        </a>
    );
}

const funFacts = ['React enthusiast' , 'CS student' , 'OU 2025'];

const funFactsBuilder = (length = 3) => {
    const facts = funFacts
        .map(fact => ({ fact, randPos: Math.random()}))
        .sort((a,b) => a.randPos - b.randPos)
        .map(factObject => factObject.fact)
        .slice(0, length)
        .join(' | ')

    return facts.toString();
}

export const Home = () => (
    <HomeWrapper>
        <MainContent>
            <Avatar picture="images/yrn.jpg" />
            <Greeting>Yo, this is Tanner</Greeting>
            <Hobbies>{funFactsBuilder()}</Hobbies>
            <SocialLinks>
                <SocialLink url = "https://github.com/TannerBenbroo">
                    <GitHubIcon style= {{ fontSize: 40}} />
                </SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);