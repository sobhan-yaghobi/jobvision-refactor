import Logo from "./Logo"

const Header = () => {
  return (
    <header>
      <div className="w-full h-20 bg-muted">
        <Logo width={130} height={130} variants="PrimaryText" />
      </div>
    </header>
  )
}

export default Header
