import React, { useContext } from 'react'
import CustomCard from '../components/Card'
import { CardRow } from '../components/styledComponents'
import Title from '../components/Title'
import { AssetContext } from '../contexts/assetContext'

const Games = () => {
  const assets = useContext(AssetContext)
  const { games } = assets

  return (
    <div>
      <Title title="Games" />
      <CardRow>
        {games.map((game) => {
          return (
            <div style={{ margin: 25 }} key={game.name}>
              <CustomCard cardData={game} />
            </div>
          )
        })}
      </CardRow>

      <div style="display:flex;">
        <div style="display: flex; flex-direction: column; width: fit-content; border:1px solid black; text-align:center; ">
          <div style="border-bottom: 1px solid black; padding: 5px ; background-color:pink ">gear_id</div>
          <div style="padding: 5px  ">gear_ball_1</div>
        </div>
        <div style="display: flex; flex-direction: column;  border:1px solid black; text-align:center;  ">
          <div style="border-bottom: 1px solid black; padding: 5px; background-color:pink ">level - (10)</div>
          <div style="padding: 5px; display: flex; align-items:center; ">
            <input type="number" style="width:100%; text-align:center;  border:none   " />
          </div>
        </div>
        <div style="display: flex; flex-direction: column; width: 100px; border:1px solid black; text-align:center; ">
          <div style="border-bottom: 1px solid black; padding: 5px;background-color:pink ">shards - (666)</div>
          <div style="padding: 5px; display: flex; align-items:center; ">
            <input type="number" style="width:100%; text-align:center; border:none " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
