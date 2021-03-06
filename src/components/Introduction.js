import React, { Component } from "react";
import styled, { css } from "styled-components";
import { ScCard } from "../elements/ScCard";

export const ScPtag = styled.p`
    font-size: 1rem;
    font-family: "Raleway", sans-serif;
`;

const ScIntroParagraph = styled.p`
    max-width:500px;
    font-size: 1rem;
    font-family: "Raleway", sans-serif;
    color: white;
    line-height: 1.5;
    margin: 0 auto;
    opacity: 0;
    margin-top: 50px;
    text-align: center;
    transition: all 0.3s linear;
    ${({ loaded }) =>
        loaded
            ? css`
                  opacity: 1;
                  margin-top: 0;
              `
            : css`
                  opacity: 0;
              `}

`;
const ScParagraphWrapper = styled.div`
    padding-top: 10%;
    @media only screen and (max-width: 600px) {
        & {
            padding-top: 20%;
        }
    }
`

export class Introduction extends Component {
    state = {
        loaded: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 500);
    }

    render() {
        return (
            <ScParagraphWrapper>
                <ScIntroParagraph loaded={this.state.loaded}>
                    Hello! I'am Saida DiPeri. I'm an ambitious, recourceful and
                    collaborative Full Stack Developer leveraging my four years
                    of experience in insurance industry to develop applications
                    that easy to use, highly available, redundant, scalable,
                    secure and simplifies the lives of others. As an developer,
                    I take solutions-driven approach believing that every
                    problem can be solved by breaking down issues into smaller,
                    manageable components. I am always seeking out dynamic and
                    efficient ways to solve challenging problems.
                </ScIntroParagraph>
            </ScParagraphWrapper>
        );
    }
}
