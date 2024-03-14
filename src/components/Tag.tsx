const Tag = ({ text, style }: { text: string, style?: string }) => {
    return (
        <div className={`text-[20px] flex items-center ${style}`}>
            <div className='red-dot' />
            <p>
                {text}
            </p>
        </div>
    )
}
export default Tag;