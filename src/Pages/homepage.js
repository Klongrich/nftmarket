import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Background = styled.div`
    background-color: grey;
    margin-top: -20px;
    padding-top: 30px;
    padding-left: 15px;

    height: 1200px;
`

const SearchAddress = styled.input`
    width: 300px;
    height: 22px;
    border-radius: 3px;
`

const SearchButton = styled.button`

`

export default function Homepage() {

    const [SearchAddress, setSearchAddress] = useState('');

    function getCurrentAssests() {
        fetch(
            // Mainnet
            // `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${userAccount}`,
            // Testnet (Rinkeby)
            // `https://rinkeby-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${SearchAddress}`,
            `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50&owner=${SearchAddress}`,
            {
                method: 'GET',
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {

    }, [])

    return (
        <>
        <Background>
            <h2> AvonToken NFT Market </h2>

            <p>Welcome to the avon nft market place! </p>
            
            <p>This is where you can buy, sell, and trade NFTs with fellow art collectors!</p>

            <p>We allow the transfer of ERC20, ETH, and USD between clients</p>

            <p>We have also enabled chat features within the platform to allow users to negotiate deals with one another</p>

            <p>NFT for NFT is intergrated as well for those looking to trade collectiable for collectiable. </p>

            <br />

            <p> Search for NFT Collection</p>
            <input onChange={e => setSearchAddress(e.target.value)} />
            <SearchButton onClick={() => getCurrentAssests()}> Search </SearchButton>

            <br /> <br />
            <p> Results </p>
        </Background>
        </>
    )

}