import React from 'react'

import {
	Container as ContainerStyled,
	Img as ImgStyled,
	Name as NameStyled,
	Msg as MsgStyled
} from './styles'

const Comment = () => 
	<ContainerStyled>
		<NameStyled>
			<span className='name'>Joanna</span><span className='date'>12/12/12:12/12/12</span>
		</NameStyled>
		<MsgStyled>
			<ImgStyled>
				<img 
					src='data:image/jpeg;base64,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' 
					alt='' />
			</ImgStyled>
			<p>asdas asdadas asdasda dasdasd asdfsdfd dfggfdg fhghfhf dfgd sdfasdas das</p>
		</MsgStyled>
	</ContainerStyled>

export default Comment
