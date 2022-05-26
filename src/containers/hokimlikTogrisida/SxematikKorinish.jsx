import React from 'react';
import styled from 'styled-components';

import sxematik from '../../images/sxematik.png'

const SxematikKorinish = () => {
    return (
        <Wrapper>
            <div className="p-2 text-light rounded bg-primary mb-2" style={{ fontSize: "18px" }}>Tarkibiy tuzilmaning sxematik ko'rinish</div>
            <img src={sxematik} alt="" />
        </Wrapper>
    );
}

export default SxematikKorinish;

const Wrapper = styled.div`
    
`
