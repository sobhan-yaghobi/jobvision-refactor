import Logo from "./Logo"

const Header = () => {
  return (
    <header>
      <div className="bg-muted w-full h-20 flex items-center justify-between">
        <Logo width={130} height={130} variants="PrimaryText" />
      </div>
    </header>
  )
}

export default Header
