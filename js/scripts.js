let cont1 = 0
let cont2 = 0

const container = document.getElementById('container__game')
const result1 = document.getElementById('result-1')
const result2 = document.getElementById('result-2')
const line_corner_right = document.getElementById('line-corner-right')
const line_corner_left = document.getElementById('line-corner-left')
const line_row_1 = document.getElementById('line-row-1')
const line_row_2 = document.getElementById('line-row-2')
const line_row_3 = document.getElementById('line-row-3')
const line_column_1 = document.getElementById('line-column-1')
const line_column_2 = document.getElementById('line-column-2')
const line_column_3 = document.getElementById('line-column-3')
const message = document.getElementById('message')
const paragraph = document.getElementById('paragraph')
const button_continue = document.getElementById('continue')
const button_restart = document.getElementById('restart')

let positions = ["0","1","2","3","4","5","6","7","8"]
let positionsBlocks = [true, true, false, true, true,true, true, true,true]
let positionMarked = []
let responseFunction = null
let win = false

result1.textContent = cont1
result2.textContent = cont2


container.addEventListener('click', (e)=>{
  if(container.children[e.target.dataset.pos] != undefined){
    if(e.target.hasChildNodes() == false ){
      if (win == false){
        const icon = document.createElement('div')
        icon.classList.add('marker_icon-x')
        e.target.append(icon)
  
        positionMarked.push(e.target.dataset.pos)
        let deletePosition = positions.indexOf(e.target.dataset.pos)
        positions.splice(deletePosition, 1)
    
        responseFunction = isThereAWinner('marker_icon-x')
    
        const getPosition = () =>{
            let position = positions[Math.floor(Math.random()*positions.length)]
            return position
        } 
      
        const getReponse = (pos) =>{
            
            if(pos != undefined && responseFunction == 0){
              if(container.children[pos].hasChildNodes() == false){
              
                setTimeout(()=>{
                  const icon_bad = document.createElement('div')
                  icon_bad.classList.add('marker_icon-circle')
                  container.children[pos].append(icon_bad)
                  
                  responseFunction = isThereAWinner('marker_icon-circle')
                  
                  positionMarked.push(container.children[pos].dataset.pos)
                  let deletePosition = positions.indexOf(container.children[pos].dataset.pos)
                  positions.splice(deletePosition, 1)
                  
                  if(responseFunction == 1){
                    paragraph.textContent = 'Perdiste'
                    paragraph.classList.remove('paragraph-tie')
                    paragraph.classList.add('paragraph-lost')
                    message.classList.add('message--show')
                    console.log('Perdiste')
                    cont2 += 1
                    result2.textContent = cont2
                    win = true
                  } 
               },100)
              }  
            }else if(responseFunction == 1){
              paragraph.textContent = '¡Ganaste!'
              paragraph.classList.remove('paragraph-lost')
              paragraph.classList.remove('paragraph-tie')
              message.classList.add('message--show')
              cont1 += 1
              result1.textContent = cont1
              win = true
            }else{
              paragraph.textContent = 'Empate'
              paragraph.classList.remove('paragraph-lost')
              paragraph.classList.add('paragraph-tie')
              message.classList.add('message--show')
              win = true
            }
        }
    
        if (responseFunction == 1){
          paragraph.textContent = '¡Ganaste!'
          paragraph.classList.remove('paragraph-lost')
          paragraph.classList.remove('paragraph-tie')
          message.classList.add('message--show')
          win = true
          cont1 += 1
          result1.textContent = cont1
        }else if (responseFunction == 0){
          getReponse(getPosition())
        }
      }
    }

  }
})


  const isThereAWinner = (icon) =>{
                                                    /*Fila 1, columna 1, Diagonal "\" */
        if(container.children[0].children[0] != undefined && (container.children[0].children[0].className == icon)){
            if(container.children[1].children[0] != undefined && (container.children[1].children[0].className == icon)){
              if(container.children[2].children[0] != undefined && (container.children[2].children[0].className == icon)){
                line_row_1.classList.add('line__row__1--show')
                return 1
              }  
            } if(container.children[3].children[0] != undefined && (container.children[3].children[0].className == icon)){
                    if(container.children[6].children[0] != undefined && (container.children[6].children[0].className == icon)){
                        line_column_1.classList.add('line__column__1--show')
                        return 1
                    } 
            } if(container.children[4].children[0] != undefined && (container.children[4].children[0].className == icon)){
                    if(container.children[8].children[0] != undefined && (container.children[8].children[0].className == icon)){
                        line_corner_left.classList.add('line__corner__left--show')
                        return 1
                    }                                        
            }  
        }                                                    /*Fila 2*/
        if(container.children[3].children[0] != undefined && (container.children[3].children[0].className == icon)){
                if(container.children[4].children[0] != undefined && (container.children[4].children[0].className == icon)){
                  if(container.children[5].children[0] != undefined && (container.children[5].children[0].className == icon)){
                    line_row_2.classList.add('line__row__2--show')
                    return 1
                  }  
                }                                                  
        }                                                     /*Fila 3, diagonal "/" y columna 1 */
        if(container.children[6].children[0] != undefined && (container.children[6].children[0].className == icon)){
                if(container.children[7].children[0] != undefined && (container.children[7].children[0].className == icon)){
                  if(container.children[8].children[0] != undefined && (container.children[8].children[0].className == icon)){
                    line_row_3.classList.add('line__row__3--show')
                    return 1
                  }  
                }if(container.children[4].children[0] != undefined && (container.children[4].children[0].className == icon)){
                        if(container.children[2].children[0] != undefined && (container.children[2].children[0].className == icon)){
                            line_corner_right.classList.add('line__corner__right--show')
                            return 1
                        }
                }if(container.children[3].children[0] != undefined && (container.children[3].children[0].className == icon)){
                        if(container.children[0].children[0] != undefined && (container.children[0].children[0].className == icon)){
                          line_column_1.classList.add('line__column__1--show')
                          return 1
                }
          }                                              
        }                                                     /*Columna 2*/
        if(container.children[1].children[0] != undefined && (container.children[1].children[0].className == icon)){
              if(container.children[4].children[0] != undefined && (container.children[4].children[0].className == icon)){
                if(container.children[7].children[0] != undefined && (container.children[7].children[0].className == icon)){
                  line_column_2.classList.add('line__column__2--show')
                  return 1
                }   
              }
        }                                                     /*Columna 3*/
        if(container.children[2].children[0] != undefined && (container.children[2].children[0].className == icon)){
              if(container.children[5].children[0] != undefined && (container.children[5].children[0].className == icon)){
                if(container.children[8].children[0] != undefined && (container.children[8].children[0].className == icon)){
                  line_column_3.classList.add('line__column__3--show')
                  return 1
                } 
              }
        }                                             /*Columna 2, fila 2, diagonal "/"  */
        if(container.children[4].children[0] != undefined && (container.children[4].children[0].className == icon)){
          if(container.children[1].children[0] != undefined && (container.children[1].children[0].className == icon)){
            if(container.children[7].children[0] != undefined && (container.children[7].children[0].className == icon)){
              line_column_2.classList.add('line__column__2--show')

              return 1
            } 
          } if(container.children[3].children[0] != undefined && (container.children[3].children[0].className == icon)){
                 if(container.children[5].children[0] != undefined && (container.children[5].children[0].className == icon)){
                  line_row_2.classList.add('line__row__2--show')
                   return 1
                 }
          }     if(container.children[6].children[0] != undefined && (container.children[6].children[0].className == icon)){
                  if(container.children[2].children[0] != undefined && (container.children[2].children[0].className == icon)){
                    line_corner_right.classList.add('line__corner__right--show')
                    return 1
            }
          }
        }
    return 0
  }

  button_continue.addEventListener('click',(e)=>{

    positions = ["0","1","2","3","4","5","6","7","8"]
    positionMarked = []
    
    message.classList.remove('message--show')
    for (const children of container.children){
      if(children.firstElementChild != null){
        children.removeChild(children.firstChild)
      }
    }

    line_corner_right.classList.remove('line__corner__right--show')
    line_corner_left.classList.remove('line__corner__left--show')
    line_row_1.classList.remove('line__row__1--show')
    line_row_2.classList.remove('line__row__2--show')
    line_row_3.classList.remove('line__row__3--show')
    line_column_1.classList.remove('line__column__1--show')
    line_column_2.classList.remove('line__column__2--show')
    line_column_3.classList.remove('line__column__3--show')

    win = false

  })

  button_restart.addEventListener('click', ()=>{
      cont1 = 0
      cont2 = 0
      result1.textContent = 0
      result2.textContent = 0
      button_continue.click()
  })