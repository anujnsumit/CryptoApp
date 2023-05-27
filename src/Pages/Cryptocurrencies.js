import React,{useEffect, useState} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom';
import {Card,Col,Row,Input} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified }) => {
  const count = simplified ? 10 : 100;
  const {data:cryptoList,isFetching}=useGetCryptosQuery(count);
  const [cryptos,setCrypto]=useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    setCrypto(cryptoList?.data?.coins);
    const filteredData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));
    setCrypto(filteredData);
  },[searchTerm])

  if (isFetching) return "Loading...";
  return (
    <>
     {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;