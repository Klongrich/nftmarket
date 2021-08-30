import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Background = styled.div`
    background-color: grey;
    margin-top: -20px;
    padding-top: 30px;
    padding-left: 15px;

    height: 100%;
`

const ImageBox = styled.div`
    height: 300px;
    width: 300px;

    padding: 20px;
    
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 10px;
    margin-bottom: 10px;

    border: 1px solid black;
    display: inline-block;
`

export const Filler = [
    {
      id: 0,
      data_image_url: "null",
    },
    {
      id: 1,
      data_image_url: "null",
    }
]

export default function Homepage() {

    const [SearchAddress, setSearchAddress] = useState('');
    const [userNFTs, setUserNFTs] = useState(Filler);

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
                setUserNFTs(data.assets);

                console.log(data.assets[0])
                console.log(data.assets[0].image_url)
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

            <p> Search for NFT Collection By Wallet</p>
            <input onChange={e => setSearchAddress(e.target.value)} />
            <button onClick={() => getCurrentAssests()}> Search </button>

            <br /> <br />
            <p> Results </p>

            {userNFTs.map((data) => 
                <>
                    <ImageBox>
                        <p> Name: {data.name}</p>
                        <img src={data.image_url} height={210} width={210}/>
                        {/* {<p>Owner: {data.owner.user.username}</p>} */}
                        {/* <p>TokenID: {data.description} </p> */}
                        {/* <p>URL Link: {data.image_url} </p> */}
                    </ImageBox>
                </>
            )}

        </Background>
        </>
    )

}