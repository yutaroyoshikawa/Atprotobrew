"use client";

import { AppButton } from "../../../core/components/AppButton";
import { AppCard } from "../../../core/components/AppCard";
import { AppForm, AppFormTrigger } from "../../../core/components/AppForm";
import { AppH1 } from "../../../core/components/AppH1";
import { AppInput } from "../../../core/components/AppInput";
import { AppText } from "../../../core/components/AppText";
import { AppVStack } from "../../../core/components/AppVStack";
import { useForm } from "@tanstack/react-form";
import { AtPassportLogin } from "../../../core/components/AtPassportLogin";
import { AppSeparator } from "../../../core/components/AppSeparator";
import { Trans } from "@lingui/react/macro";
import { useLocale } from "../../../core/modules/i18n";

const DEFAULT_HANDLE_RESOLVER = "https://bsky.social";

interface FormInputs {
  handle: string;
  handleResolver: string;
}

interface AuthFormProps {
  onSubmit?: (inputs: FormInputs) => Promise<void>;
  onAtPassportLogin?: () => void;
}

export function AuthForm({ onSubmit, onAtPassportLogin }: AuthFormProps) {
  const form = useForm({
    defaultValues: {
      handle: "",
      handleResolver: DEFAULT_HANDLE_RESOLVER,
    } satisfies FormInputs,
    onSubmit: (props) => onSubmit?.(props.value),
  });
  const locale = useLocale();

  return (
    <AppCard>
      <AppVStack gap="$5">
        <AppVStack gap="$1">
          <AppH1>Atprotobrew</AppH1>
          <AppText>
            <Trans>AT Protocol サービスランチャー</Trans>
          </AppText>
        </AppVStack>

        <AppForm onSubmit={form.handleSubmit}>
          <AppVStack gap="$5">
            <AppVStack gap="$1">
              <form.Field name="handle">
                {(field) => (
                  <>
                    <Trans render={AppText}>ハンドル</Trans>
                    <AppInput
                      id={field.name}
                      prefix="@"
                      value={field.state.value}
                      name={field.name}
                      onChangeText={field.handleChange}
                      placeholder="user.bsky.social"
                      autoComplete="username"
                      autoCapitalize="none"
                      autoCorrect={false}
                      spellCheck={false}
                      disabled={form.state.isSubmitting}
                    />
                    {!field.state.meta.isValid && (
                      <AppText kind="error" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </AppText>
                    )}
                  </>
                )}
              </form.Field>
            </AppVStack>

            <AppVStack gap="$1">
              <form.Field name="handleResolver">
                {(field) => (
                  <>
                    <AppText>PDS URL</AppText>
                    <AppInput
                      id={field.name}
                      value={field.state.value}
                      name={field.name}
                      onChangeText={field.handleChange}
                      placeholder={DEFAULT_HANDLE_RESOLVER}
                      autoCapitalize="none"
                      autoCorrect={false}
                      spellCheck={false}
                      disabled={form.state.isSubmitting}
                    />
                    {!field.state.meta.isValid && (
                      <AppText kind="error" role="alert">
                        {field.state.meta.errors.join(", ")}
                      </AppText>
                    )}
                  </>
                )}
              </form.Field>
            </AppVStack>

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <AppFormTrigger asChild disabled={!canSubmit}>
                  {isSubmitting ? (
                    <Trans render={AppButton}>リダイレクト中…</Trans>
                  ) : (
                    <Trans
                      render={(props) => (
                        <AppButton {...props} onPress={form.handleSubmit} />
                      )}
                    >
                      ログイン
                    </Trans>
                  )}
                </AppFormTrigger>
              )}
            />
          </AppVStack>
        </AppForm>

        <AppSeparator />

        <AtPassportLogin lang={locale} onPress={onAtPassportLogin} />
      </AppVStack>
    </AppCard>
  );
}
