import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from '@mui/x-data-grid'

interface IProps {
  hideMenu: any
  currentColumn: any
  open: any
}

export default function DataGridCustomColumnMenu({ hideMenu, currentColumn, open }: IProps) {
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  )
}
