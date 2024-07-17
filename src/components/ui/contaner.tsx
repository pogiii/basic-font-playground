import { ReactNode } from "react"

type ContainerProps = {
    children?: ReactNode | ReactNode[]
}
export const Container = ({ children }: ContainerProps) => (
    <div className="p-0 w-screen h-screen flex items-center justify-center flex-col bg-black">
        {children}
    </div>
)