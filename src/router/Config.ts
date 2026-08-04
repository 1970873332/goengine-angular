import { Route } from "@angular/router";
import {
    RouteConfig as BaseRouteConfig,
    RouteObject,
} from "@goengine/web/src/router/Config";

/**
 * Angular路由配置
 */
export default abstract class RouteConfig extends BaseRouteConfig {
    /**
     * 路由
     */
    public static get routes(): TRouteObject[] {
        return [];
    }
}

type TRouteObject = Route &
    RouteObject & {
        /**
         * 子项
         */
        children?: TRouteObject[];
    };

export { TRouteObject as RouteObject };
