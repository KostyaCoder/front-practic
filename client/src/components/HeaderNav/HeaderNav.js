import styles from "./HeaderNav.module.sass";
import CONSTANTS from "../../constants";
import classNames from "classnames";

export default function HeaderNav() {
  function topHeaderNavItemsRender(itemTop, i, arr) {
    return (
      <li
        key={i}
        className={classNames(styles.listItemsTop, {
          [styles.listItemsTopLast]: i === arr.length - 1,
        })}
      >
        <h4 className={styles.itemTopTitle}>{itemTop.title}</h4>
        <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
        <ul className={styles.listItems}>
          {itemTop.items.map((item, i, arr) => (
            <li
              key={i}
              className={classNames(styles.item, {
                [styles.itemLast]: i === arr.length - 1,
              })}
            >
              <a className={styles.aStyle} href={item.linkItem}>
                {" "}
                {item.titleItem.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  function topHeaderNavRender() {
    return CONSTANTS.HeaderNavItems.map((itemTop, i, arr) =>
      topHeaderNavItemsRender(itemTop, i, arr)
    );
  }

  return (
    <div className={styles.nav}>
      <ul className={styles.navTop}>{topHeaderNavRender()}</ul>
    </div>
  );
}
