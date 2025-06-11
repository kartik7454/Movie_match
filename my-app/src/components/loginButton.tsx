import { cn } from '../lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { Loader2 } from 'lucide-react'

export const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
      variants: {
        variant: {
          default: 'bg-slate-900 text-white hover:bg-slate-800',
          ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
        },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2',
          lg: 'h-11 px-8',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  )


//tells compiler what props can be passed to the component  
//which  in this case  is every that can be passed to a button and variant we created
//here extends means inherit
  export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

//this is our component(button) which takes fc as props of type buttonprops which we declared 
//and then there is a function call ,which have parameters which are destructured from fc
//childen is what's written inside btn(name etc)
const button: FC<ButtonProps> = ({className,children,variant,size,isLoading,...props}) => {
  return (<button
    className={cn(buttonVariants({ variant, size, className }))}
    disabled={isLoading}
    {...props}>
    {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
    {children}
  </button>)
}

export default button