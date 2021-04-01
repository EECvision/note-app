const CustomLogo = ({ inverted }) => (
    <div className="w-24 flex items-center justify-center">
        <div className={`${inverted ? 'text-white' : 'text-gray-700'} font-medium text-2xl`}>Note</div>
        <div className={`relative w-auto px-2 pb-1 flex items-center justify-center ${inverted ? 'bg-white' : 'bg-red-600'}  rounded-full mr-1`}>
            <div className={`leading-none ${inverted ? 'text-red-700' : 'text-white'} text-center text-base font-medium`}>on</div>
        </div>
    </div>
)

export default CustomLogo;