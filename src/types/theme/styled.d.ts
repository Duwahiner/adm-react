import {} from "styled-components";
import { ThemeApp } from ".";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeApp {}
}
