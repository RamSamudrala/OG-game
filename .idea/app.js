document.addEventListener('DOMContentLoaded', () => {
   const grid = document.querySelector('grid') 
   const scoreDisplay = document.querySelector('score') 
   const levelDisplay = document.querySelector('level') 
   const enemyDisplay = document.querySelector('enemies') 
   
   const width = 10
   const tileSize = 48

   const square = []
   let score = 0
   let level = 0
   let playerPosition = 40
   let enemeies = []
   let playerDirection = 'right'
   let gameRunning = true

   // y,w,x,z = corner walls | a,b = side walls | c,d = top/bottom walls
   // ) = lanterns | ( = fire pots | % = left door | ^ = top door | $ = stairs
   // * = slicer enemy | } = skeletor enemy | (space) = empty walkable area
   const maps = [
      // Level 1 layout
      [
         'ycc)cc^ccw',
         'a        b',
         'a      * b',
         'a    (   b',
         'a        b',
         'a    (   b',
         'a  *     b',
         'xdd)dd)ddz'

      ],
   //Level 2 layout
      [
         'ycc)cc^ccw',
         'a        b',
         'a      * b',
         'a    (   b',
         'a        b',
         ')    (   )',
         'a  }     b',
         'xddddddddz',
      ]
   ]

   function createBoard(){
    const currentMap = maps[level]
     
    for (let i =0; i < 9; i++) {
         for (let j =0; j < 10; j++){
              const square = document.createElement('div')
              square.setAttribute('id', i * width + j) 
              
              const char = currentMap[i][j]
              // add mapElement(square, char , i,j)
              grid.appendChild(square)
            }
    }
   }
   createBoard()

   console.log(squares)
})