import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import socket from 'socket.io-client'

import Notification from './Components/Toasts/IO/Notifications'
import Invite from './Components/Toasts/IO/Invites'
import Dialogue from './Components/Toasts/IO/Dialogues'

import { baseURL } from '../../Global/api'

import history from '../../Global/redux/reducers/actions/history'
import payload from '../../Global/redux/reducers/actions/payload'
import responsive from '../../Global/redux/reducers/actions/responsive'
import disconnect from '../../Global/redux/reducers/actions/disconnectSocket'

import Nav from './Components/Nav'

import Profile from './pages/Profile'
import Timeline from './pages/Timeline'

import local from '../../Global/functions/localStorage'

import * as requests from './requests'

import {
	Loading as LoadingStyled,
	Container as ContainerStyled
} from './styles'

const Dashboard = ({ history, push, setPush, payload, setPayload, bodyDashboard, responsived, setResponsive, setDisconnect, disconnectSocket }) => {
	const [preparetion, setPreparetion] = useState(false)

	useEffect(() => {
		if (window.innerWidth <= 715) {
			!responsived && setResponsive(true)
		} else {
			responsived && setResponsive(false)
		}
	}, [])

	const startSocket = () => {
		
		const io = socket(baseURL, {
			query: {
				user_id: payload.id
			}
		})

		io.on('connect', () => {

			setDisconnect(() => {
				io.close()
			})

			io.on('notifications', data => {
				toast.info(<Notification data={ data } />, { autoClose: false })
			})

			io.on('invites', data => {
				toast.success(<Invite data={ data } />, { autoClose: false })	
			})

			io.on('dialogues', data => {
				toast.info(<Dialogue data={ data } />, { autoClose: false })
			})

		})
	}


	useEffect(() => {

		const reconnect = () => {
			if (payload === null || Object.values(payload).length === 0) {
				requests
					.reconnect(local.get())
					.then(res => {
						setPayload({ ...res, token: local.get() })
					}).catch(err => {
						local.remove()
						toast.error(err)
						history.push('/')
					})
			}
		}

		if (local.get()) {
			reconnect()
		} else {
			toast.error('Sem token')
			history.push('/')	
		}
	

	}, [])

	useEffect(() => {
		payload && Object.values(payload).length && (() => {
			setPreparetion(true)	
			startSocket()
		})()
	}, [payload])

	useEffect(() => {
		document.body.onresize = ({ currentTarget }) => {
			if (currentTarget.innerWidth <= 715) {
				!responsived && setResponsive(true)
			} else {
				responsived && setResponsive(false)
			} 
		}
	}, [responsived])

	!push && setPush(history.push)

	const renderBody = index => {
		switch(index) {
			case 0:
				return <Profile />
				break;
			default:
				return <Timeline />
		}
	}

	return preparetion ? 
		<ContainerStyled> 
			<Nav />
			{ renderBody(bodyDashboard) } 
		</ContainerStyled> : <LoadingStyled> <img src='./imagens/loading.gif' alt='Imagem de loading' /> </LoadingStyled>
}

const mapDispatchToProps = dispatch => {
	return {
		setPush: push => {
			dispatch(history.call(push))
		},
		setPayload: data => {
			dispatch(payload.call(data))
		},
		setResponsive: responsived => {
			dispatch(responsive.call(responsived))
		},
		setDisconnect: fb => {
			dispatch(disconnect.call(fb))
		}
	}
}

const mapStateToProps = state => 
	({ 
		push: state.push, 
		payload: state.payload, 
		bodyDashboard: state.bodyDashboard,
		responsived: state.responsived,
		disconnectSocket: state.disconnectSocket
	})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)