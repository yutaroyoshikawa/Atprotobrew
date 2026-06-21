import { useUserProfile } from "@atprotobrew/common/user/modules/useUserProfile";
import { LogOut } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

interface UserMenuButtonProps {
  actor: string;
  onLogout: () => void | Promise<void>;
}

export function UserMenuButton({ actor, onLogout }: UserMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const { data: profile } = useUserProfile(actor);

  const label = profile?.displayName ?? profile?.handle ?? "...";
  const avatarUri = profile?.avatar;

  const close = useCallback(() => {
    setIsOpen(false);
    // フォーカスをトリガーに戻す
    triggerRef.current?.focus();
  }, []);

  // Escape キーで閉じる
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  // メニュー展開時に最初の項目へフォーカス移動
  useEffect(() => {
    if (!isOpen) return;
    const firstItem =
      menuRef.current?.querySelector<HTMLElement>('[role="menuitem"]');
    firstItem?.focus();
  }, [isOpen]);

  // click-outside で閉じる
  useEffect(() => {
    if (!isOpen) return;
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [isOpen]);

  const handleLogout = async () => {
    close();
    await onLogout();
  };

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={() => setIsOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full px-2.5 py-1.5 bg-bgContrast25 hover:bg-bgContrast50 transition-colors cursor-pointer"
      >
        {avatarUri ? (
          <img
            src={avatarUri}
            alt=""
            className="w-7 h-7 rounded-full object-cover"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-bgContrast50 shrink-0" />
        )}
        <span className="text-sm font-medium text-text max-w-[100px] truncate">
          {label}
        </span>
      </button>

      {isOpen && (
        <div
          id={menuId}
          ref={menuRef}
          role="menu"
          className="absolute top-full right-0 mt-1 bg-bgContrast25 rounded-xl shadow-lg py-1 min-w-[160px] z-50"
        >
          <button
            type="button"
            role="menuitem"
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-left text-text hover:bg-bgContrast50 transition-colors cursor-pointer"
          >
            <LogOut size={18} className="text-textContrastMedium shrink-0" />
            <span className="text-base">ログアウト</span>
          </button>
        </div>
      )}
    </div>
  );
}
