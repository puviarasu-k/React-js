import React from 'react'
import { useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

function Scroll() {

    const [data,setdata] = useState(Array.from({length:20}))
    const style = {
        height: 30,
        border: "1px solid black",
        margin: 6,
        padding: 8
      };
    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setdata(data.concat(Array.from({ length: 20 })))             
        }, 1000);
    };
    return (
        <div>
            <h1>react-infinite-scroll-component</h1>
            <hr />
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {data.map((i, index) => (
                    <div style={style} key={index}>
                        div - #{index}
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default Scroll
