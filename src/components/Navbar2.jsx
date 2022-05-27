import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar2 = () => {
    const data = [
        {
            link: "a",
            links: ["aa", "aa", "aa"]
        },
        {
            link: "b",
            links: ["bb", "bb", "bb"]
        }
    ]

    const [child, setChild] = useState([])

    return (
        <Wrapper>
            <div style={{ display: "flex" }}>
                <ul style={{ width: "50%" }}>
                    {
                        data.map(({ link, links }) => {
                            return (
                                <li onClick={() => setChild(links)}>{link}</li>
                            )
                        })
                    }
                </ul>

                <ul style={{ width: "50%" }}>
                    {
                        child.map((link) => {
                            return (
                                <li>{link}</li>
                            )
                        })
                    }
                </ul>
            </div>

        </Wrapper>
    );
}

export default Navbar2;

const Wrapper = styled.div`
    
`
