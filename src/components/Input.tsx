interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  error?: string
}

export const Input: React.FC<IInputProps> = ({
  label,
  error,
  ...props
  }) =>{
    return (
      <div>
        <h3>{label}</h3>
        <input className= "border pl-2 w-full"
          {...props}
        />
        {error && <p className="text-[red]">{error}</p>}
      </div>
    )
  }