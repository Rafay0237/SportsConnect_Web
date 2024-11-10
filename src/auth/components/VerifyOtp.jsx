import { useState } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginSuccess } from "../../redux/user/userSlice"
import API from '../../services/Api'

const VerifyOtp = ({ setShowOtpForm, email }) => {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', content: '' })
  const [isResending, setIsResending] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    setIsLoading(true)
    setMessage({ type: '', content: '' })

    try {
      const response = await API.post(
        "user/verify-otp",
        { email, otp }
      )
      if(response.data.success){
        setMessage({ type: 'success', content: 'OTP verified successfully!' })
        dispatch(loginSuccess({ user: response.data.user, token: response.data.token }))
        navigate("/")
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Failed to verify OTP. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const resendOtp = async () => {
    setIsResending(true)
    setOtp('')
    setMessage({ type: '', content: '' })

    try {
      await API.post("user/resend-otp", {  email})
      setMessage({ type: 'success', content: 'OTP resent successfully!' })
    } catch (error) {
      setMessage({ type: 'error', content: 'Failed to resend OTP. Please try again.' })
    } finally {
      setIsResending(false)
    }
  }

  const handleClose = () => {
    setShowOtpForm(null)
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        className="relative bg-white shadow-md rounded-lg p-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleClose}
          aria-label="Close"
        >
          <FaTimes className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-2">OTP Verification</h2>
        <p className="text-gray-600 mb-6">Enter your OTP to verify your account</p>
        <div className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
              OTP
            </label>
            <input
              id="otp"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button
            type="button"
            className={`w-full bg-black text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isLoading || (message.type === 'error' && message.content) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleSubmit}
            disabled={isLoading || (message.type === 'error' && message.content)}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
          {message.type === 'error' && message.content && (
            <button
              type="button"
              className={`w-full bg-black text-white py-2 px-4 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
                isResending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={resendOtp}
              disabled={isResending}
            >
              {isResending ? 'Resending...' : 'Resend OTP'}
            </button>
          )}
        </div>
        <div className={`mt-4 flex items-center h-4 -mb-2 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
        {message.content && (
          <>
            {message.type === 'success' ? (
              <FaCheckCircle className="mr-2" />
            ) : (
              <FaExclamationCircle className="mr-2" />
            )}
            <p>{message.content}</p>
          </>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerifyOtp