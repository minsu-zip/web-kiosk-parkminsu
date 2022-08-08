import { TMenuOption } from 'types'
import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import IconUnchecked from '../../images/unchecked.svg'
import IconChecked from '../../images/checked.svg'
import OptionDetail from 'components/OptionDetail'

interface Props {
  options: TMenuOption[]
}

const MenuOption: React.FC<Props> = ({ options }) => {
  console.log(options)

  const [selectedOption, setSelectedOption] = useState(
    options.map(({ id }) => ({ optionId: id, detailId: 0 })),
  )
  //   const [selectedOption, setSelectedOption] = useState(1)

  const onClickSelectedOption = useCallback(
    (optionIndex: number, detailId: number) => {
      //   const { id } = (e.currentTarget as HTMLElement).dataset
      console.log(selectedOption)

      console.log(optionIndex, detailId)
      const newSelectedOption = [...selectedOption]
      newSelectedOption[optionIndex].detailId = detailId
      setSelectedOption(newSelectedOption)
    },
    [selectedOption],
  )

  //   return (
  //     <>
  //       <OptionContainer>
  //         {options.map(({ detail, name, id }) => (
  //           <>
  //             <Div onClick={onClickSelectedOption}>{name}</Div>
  //             {detail.map(({ id, name, price }) => (
  //               <OptionWrapper data-id={id} onClick={onClickSelectedOption}>
  //                 <Div>
  //                   <Img
  //                     src={selectedOption === id ? IconChecked : IconUnchecked}
  //                     alt={name}
  //                   />
  //                 </Div>

  //                 <Div>{name}</Div>
  //                 <Div>{price.toLocaleString()}원</Div>
  //               </OptionWrapper>
  //             ))}
  //           </>
  //         ))}
  //       </OptionContainer>
  //     </>
  //   )
  // }

  return (
    <>
      <OptionContainer>
        {options.map(({ detail, name, id }, index) => (
          <>
            <Div>{name}</Div>
            {detail.map((option) => (
              <OptionDetail
                option={option}
                selectedOption={selectedOption[index]}
                onClickSelectedOption={(id) => onClickSelectedOption(index, id)}
              />

              //   <OptionWrapper data-id={id} onClick={onClickSelectedOption}>
              //     <Div>
              //       <Img
              //         src={selectedOption === id ? IconChecked : IconUnchecked}
              //         alt={name}
              //       />
              //     </Div>

              //     <Div>{name}</Div>
              //     <Div>{price.toLocaleString()}원</Div>
              //   </OptionWrapper>
            ))}
          </>
        ))}
      </OptionContainer>
    </>
  )
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin-left: 30px;
  /* margin-top: 30px; */
  justify-content: center;
`

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  margin: 10px;
`

const Div = styled.span`
  margin-left: 10px;
  font-size: 18px;
`

export default MenuOption
